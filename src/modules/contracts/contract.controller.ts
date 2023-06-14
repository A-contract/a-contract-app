import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ContractService } from './contract.service';
import { JwtService } from '@nestjs/jwt';
import { RoleService } from '../role/role.service';
import { AuthService } from '../auth/auth.service';

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
      ); //data['id']
      if (user.role === 'customer') {
        return {
          status: HttpStatus.ACCEPTED,
          message: 'success',
          contracts: contracts.map((element: any, index: number) => ({
            id: index + 1,
            name: element.name,
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

      const user: any = await this.authService.findOne({ id: data['id'] });

      const contract: any = await this.contractService.findOne(request.body.id);

      await this.contractService.createProcessing({
        contractId: contract.id,
        originalName: contract.originalName,
        name: contract.name,
        size: contract.size,
        userId: contract.userId,
        lawerId: user.id,
        pathToFile: contract.pathToFile,
      });

      await this.contractService.update(contract.id, 1);

      console.log(request.body.id);
      console.log(user.id);
    } catch (e) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'unsuccess',
      };
    }
  }
}
