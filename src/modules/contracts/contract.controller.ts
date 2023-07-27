import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ContractService } from './contract.service';
import { JwtService } from '@nestjs/jwt';
import { RoleService } from '../role/role.service';
import { AuthService } from '../auth/auth.service';
import * as fs from 'fs-extra';
import { createReadStream } from 'fs';
import { convertDocxToHtml } from 'src/utils/docsFormatter';
import { copyFileWithReplacement } from 'src/utils/fileUtils';
import path, { join } from 'path';

@Controller('contracts')
export class ContractController {
  constructor(
    private readonly contractService: ContractService,
    private readonly authService: AuthService,
    private readonly roleService: RoleService,
    private jwtService: JwtService,
  ) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/contracts',
        filename: ((controller: ContractController) => {
          return (request, file, callback) => {
            const currentDate = new Date();
            const formattedDate = currentDate
              .toISOString()
              .replace(/:/g, '-')
              .replace(/\./g, '-');
            file.originalname = `${formattedDate}-${file.originalname}`;
            callback(null, file.originalname);
          };
        })(this),
      }),
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Req() request: any,
  ) {
    try {
      const data = await this.jwtService.verifyAsync(request.cookies['jwt']);

      if (!data) {
        return {
          status: HttpStatus.UNAUTHORIZED,
          message: 'success',
        };
      }

      await this.contractService.create({
        userId: data['id'],
        originalName: file.originalname,
        name: `${file.originalname}`,
        size: file.size,
        dateUploaded: new Date(),
        pathToFile: './uploads/contracts',
        progressStatus: 'Waiting for payment',
        paymentStatus: false,
      });

      return {
        status: HttpStatus.ACCEPTED,
        message: 'success',
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'Failed to upload file',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('contracts')
  async user(@Req() request: any) {
    try {
      const data = await this.jwtService.verifyAsync(request.cookies['jwt']);

      const user: any = await this.authService.findOne({ id: data['id'] });
      const contracts: any = await this.contractService.findAll(
        user.role,
        data['id'],
      );

      if (user.role === 'customer') {
        return {
          status: HttpStatus.ACCEPTED,
          message: 'success',
          contracts: contracts.map((element: any, index: number) => ({
            id: index + 1,
            name: element.originalName,
            paymentStatus: element.paymentStatus,
            progressStatus: element.progressStatus,
          })),
        };
      } else if (user.role === 'lawyer') {
        return {
          status: HttpStatus.ACCEPTED,
          message: 'success',
          contracts: contracts,
        };
      }
    } catch (e) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'unsuccess',
      };
    }
  }

  @Post('processing')
  async processing(@Req() request: any) {
    try {
      const data = await this.jwtService.verifyAsync(request.cookies['jwt']);

      if (!data) {
        return {
          status: HttpStatus.UNAUTHORIZED,
          message: 'success',
        };
      }

      const user: any = await this.authService.findOne({ id: data['id'] });

      const contract: any = await this.contractService.findOne(request.body.id);

      await this.contractService.createProcessing({
        contractId: contract.id,
        originalName: contract.originalName,
        name: contract.name,
        size: contract.size,
        userId: contract.userId,
        lawyerId: user.id,
        pathToFile: contract.pathToFile,
      });

      await this.contractService.update(contract.id, 1);

      // Пример использования функции
      const sourceFilePath = contract.pathToFile + '/' + contract.originalName;
      const destinationFilePath =
        './uploads/contracts_in_progress/' + contract.originalName;

      copyFileWithReplacement(sourceFilePath, destinationFilePath);
    } catch (e) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'unsuccess',
      };
    }
  }

  @Get('contractInProcess')
  async contractInProcess(@Req() request: any) {
    try {
      const data = await this.jwtService.verifyAsync(request.cookies['jwt']);

      if (!data) {
        return {
          status: HttpStatus.UNAUTHORIZED,
          message: 'success',
        };
      }

      const user: any = await this.authService.findOne({ id: data['id'] });

      const contract: any = await this.contractService.findSelected(user.id);

      let content = '';

      await convertDocxToHtml(
        contract.pathToFile + '/' + contract.originalName,
      ).then((result) => {
        content = result;
      });

      return {
        status: HttpStatus.ACCEPTED,
        message: 'success',
        contracts: contract,
        content: content,
      };
    } catch (e) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'unsuccess',
      };
    }
  }

  @Post('download')
  async downloadFile(@Res() response: any, @Req() request: any) {
    const data = await this.jwtService.verifyAsync(request.cookies['jwt']);

    if (!data) {
      return {
        status: HttpStatus.UNAUTHORIZED,
        message: 'success',
      };
    }
    const user: any = await this.authService.findOne({ id: data['id'] });

    if (user.role === 'lawyer') {
      const fileName = request.body.fileName;
      const filePath = './uploads/contracts/' + fileName;
      return response.sendFile(filePath, { root: '.' });
    } else if (user.role === 'customer') {
      const fileName = request.body.fileName;
      const filePath =
        './uploads/contracts_ready/' +
        fileName.substr(0, fileName.lastIndexOf('.')) +
        '.pdf';
      return response.sendFile(filePath, { root: '.' });
    } else
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'unsuccess',
      };
  }

  @Post('finish')
  async finish(@Req() request: any) {
    try {
      const data = await this.jwtService.verifyAsync(request.cookies['jwt']);

      if (!data) {
        return {
          status: HttpStatus.UNAUTHORIZED,
          message: 'success',
        };
      }
      await this.contractService.finish(request.body.id, 2);
    } catch (e) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'unsuccess',
      };
    }
  }
}
