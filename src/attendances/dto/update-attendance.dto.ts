import { IsDate } from 'class-validator';

export class UpdateAttendanceDto {
  @IsDate()
  endDate: Date;
}
