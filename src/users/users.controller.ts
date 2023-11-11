import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';


@Controller('users')
export class UsersController {
    constructor(private userSerevice: UsersService){}    
@Get()
getUsers(): Promise<User[]>{
return this.userSerevice.getUsers();
}

@Get(':id')
getUser(@Param('id', ParseIntPipe) id: number): Promise<User>{
    console.log(id)
    console.log(typeof id)
return this.userSerevice.getUser(id);
}

   @Post()
   createUser(@Body() newUser: CreateUserDto): Promise<User>{
    return this.userSerevice.createUser(newUser)
   }

   @Delete(':id')
   deleteUser(@Param('id',ParseIntPipe) id: number){
    return this.userSerevice.delateUser(id)
}
  @Patch(':id')
  updateUser(@Param('id', ParseIntPipe) id:number, @Body()
  user: UpdateUserDto) {
    return this.userSerevice.updateUser(id, user)
  }


  @Get('login')
  loginUser(@Body() newUser: LoginUserDto){
    console.log(newUser)
    return this.userSerevice.loginUser(newUser)
  }

}

