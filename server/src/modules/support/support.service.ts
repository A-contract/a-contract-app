import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chats } from 'src/entities/chats.entity';
import { Support } from 'src/entities/support.entity';
import { Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { Messages } from 'src/entities/messages.entity';

@Injectable()
export class SupportService {
  constructor(
    @InjectRepository(Support)
    private supportRepository: Repository<Support>,
    @InjectRepository(Chats)
    private chatsRepository: Repository<Chats>,
    @InjectRepository(Messages)
    private messagesRepository: Repository<Messages>,

    private readonly authService: AuthService,
  ) {}

  async create(email: string, question: string) {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);

    this.supportRepository.save({
      email: email,
      question: question,
      dateQuestion: formattedDate,
    });
  }

  async getChat(id: number) {
    const user: any = await this.authService.findOne({ id: id });
    return await this.chatsRepository.findOne({ where: { user: user } });
  }

  async getMessages(chat: Chats) {
    return await this.messagesRepository.find({
      where: { chat: chat },
      order: { id: 'DESC' },
    });
  }

  async startChat(id: number) {
    const user: any = await this.authService.findOne({ id: id });
    const name = 'chat.' + user.email.split('@')[0];

    this.chatsRepository.save({
      name: name,
      user: user,
      dateCreated: new Date(),
    });
  }

  async sendMessage(userId: number, chatId: number, message: string) {
    const currentDate = new Date();
    this.messagesRepository.save({
      chatId: chatId,
      senderId: userId,
      message: message,
      dateCreated: currentDate,
    });
  }
}
