import { IsISO8601, IsNotEmpty } from 'class-validator';

export class UpdateAttendanceDto {
  @IsNotEmpty()
  @IsISO8601()
  endDate: Date;
}
