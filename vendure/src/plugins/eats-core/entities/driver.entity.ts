import { DeepPartial, HasCustomFields, VendureEntity } from '@vendure/core';
import { Column, Entity } from 'typeorm';

export class DriverCustomFields {}

@Entity()
export class Driver extends VendureEntity implements HasCustomFields {
  constructor(input?: DeepPartial<Driver>) {
    super(input);
  }

  @Column('varchar')
  code: string;

  @Column((type) => DriverCustomFields)
  customFields: DriverCustomFields;
}
