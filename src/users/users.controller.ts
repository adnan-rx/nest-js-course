import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Headers,
  Ip,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public getAllUsers(@Query() query: any): string {
    console.log(query);
    return `This action returns all users with query: ${JSON.stringify(query)}`;
  }

  @Get('/:id')
  @Get('/:id/:optional')
  public getUsers(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: any,
  ): string {
    console.log(id);
    console.log(query);
    return `This action returns user with ID: ${id} with query: ${JSON.stringify(query)}`;
  }

  @Post()
  public createUser(
    @Body() request: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ): string {
    console.log(request);
    console.log(headers);
    console.log(ip);
    return 'This action creates a new user';
  }
}
