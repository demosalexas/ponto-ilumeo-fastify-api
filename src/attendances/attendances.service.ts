import { Injectable } from '@nestjs/common';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { getTimeDifference } from 'src/utils/getTimeDifference';

@Injectable()
export class AttendancesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAttendanceDto: CreateAttendanceDto) {
    const { userCode, startDate } = createAttendanceDto;

    // Ensure the user exists
    const user = await this.prisma.user.findUnique({
      where: { userCode },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const attendance = await this.prisma.attendance.create({
      data: {
        startDate,
        user: {
          connect: { userCode },
        },
      },
    });

    return {
      attendance,
    };
  }

  async findAll(userCode: string) {
    const attendances = await this.prisma.user.findUnique({
      where: {
        userCode,
      },
      select: {
        userCode: true,
        attendances: true,
      },
    });

    return {
      attendancesByUserCode: attendances,
    };
  }

  async update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
    const attendanceExists = await this.prisma.attendance.findUnique({
      where: { id },
    });

    if (!attendanceExists) {
      throw new Error('Attendance not found');
    }

    const { startDate } = attendanceExists;

    const { endDate } = updateAttendanceDto;

    const attendance = await this.prisma.attendance.update({
      where: { id },
      data: {
        endDate,
        hoursWorked: getTimeDifference(startDate, endDate),
      },
    });

    return {
      attendance,
    };
  }
}
