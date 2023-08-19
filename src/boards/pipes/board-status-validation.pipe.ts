import { BadRequestException } from '@nestjs/common';
import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { BoardStatus } from '../boards.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [
    BoardStatus.PRIVATE,
    BoardStatus.PUBLIC,
  ]


  transform(value : any, metadata : ArgumentMetadata) {
    value = value.toUpperCase();

    if(!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options`);
    }

    return value;
  }

  private isStatusValid(value : any) {
    const result = this.StatusOptions.indexOf(value);

    return result !== -1
  }
}