import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttendancesModule } from './attendances/attendances.module';

@Module({
  imports: [AttendancesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
