import { Module } from '@nestjs/common';
import { AttendancesModule } from './attendances/attendances.module';

@Module({
  imports: [AttendancesModule],
})
export class AppModule {}
