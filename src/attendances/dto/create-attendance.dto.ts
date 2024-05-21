import { IsString, IsNotEmpty, IsISO8601 } from 'class-validator';

export class CreateAttendanceDto {
  @IsString()
  @IsNotEmpty()
  userCode: string;

  @IsNotEmpty()
  @IsISO8601()
  startDate: Date;
}
