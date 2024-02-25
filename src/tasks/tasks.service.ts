import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: TasksRepository,
  ) {}

  //   getAllTasks(): Task[] {
  //     return this.tasks;
  //   }

  //   getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //     let tasks = this.getAllTasks();
  //     const { status, search } = filterDto;

  //     if (status) {
  //       tasks = tasks.filter((task) => task.status === status);
  //     }

  //     if (search) {
  //       tasks = tasks.filter(
  //         (task) =>
  //           task.title.toLowerCase().includes(search.toLowerCase()) ||
  //           task.description.toLowerCase().includes(search.toLowerCase()),
  //       );
  //     }

  //     return tasks;
  //   }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.taskRepository.findOneBy({id});

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found."`);
    }

    return found;
  }

  //   createTask(createTaskDto: CreateTaskDto): Task {
  //     const { title, description } = createTaskDto;

  //     const task: Task = {
  //       id: uuid(),
  //       title,
  //       description,
  //       status: TaskStatus.OPEN,
  //     };

  //     this.tasks.push(task);
  //     return task;
  //   }

  //   deleteTask(id: string): void {
  //     const found = this.getTaskById(id);
  //     this.tasks = this.tasks.filter((task) => task.id !== found.id);
  //   }

  //   updateTaskStatus(id: string, status: TaskStatus): Task {
  //     const task = this.getTaskById(id);
  //     task.status = status;
  //     return task;
  //   }
}
