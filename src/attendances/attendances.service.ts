import { Injectable } from '@nestjs/common';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttendancesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAttendanceDto: CreateAttendanceDto) {
    const { userCode, startDate } = createAttendanceDto

    // Ensure the user exists
    const user = await this.prisma.user.findUnique({
      where: { userCode }
    })

    if (!user) {
      throw new Error('User not found')
    }

    const attendance = await this.prisma.attendance.create({
      data: {
        startDate,
        user: {
          connect: { userCode }
        }
      }
    })

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

  findOne(id: number) {
    return `This action returns a #${id} attendance`;
  }

  update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
    return `This action updates a #${id} attendance`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendance`;
  }
}
