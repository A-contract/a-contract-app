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

@Controller('contracts')
export class ContractController {
  constructor(
    private readonly contractService: ContractService,
    private jwtService: JwtService,
  ) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/contracts',
        filename: (req, file, callback) => {
          const fileName = `${file.originalname}`;
          callback(null, fileName);
        },
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
        name: file.originalname,
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
      const contracts: any = await this.contractService.findAll(data['id']);

      // contracts.foreach((element: any) => {

      // })

      return {
        status: HttpStatus.ACCEPTED,
        message: 'success',
        contracts: contracts,
      };
    } catch (e) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'unsuccess',
      };
    }
  }
}
