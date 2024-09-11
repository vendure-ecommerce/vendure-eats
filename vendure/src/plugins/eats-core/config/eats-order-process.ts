import { OrderProcess } from '@vendure/core';

export const eatsOrderProcess: OrderProcess<
  'DriverAssigned' | 'AcceptedByRestaurant' | 'RejectedByRestaurant' | 'InPreparation' | 'Done'
> = {
  transitions: {
    PaymentSettled: {
      to: ['DriverAssigned'],
      mergeStrategy: 'replace',
    },
    DriverAssigned: {
      to: ['AcceptedByRestaurant', 'RejectedByRestaurant'],
    },
    RejectedByRestaurant: {
      to: ['Done'],
    },
    AcceptedByRestaurant: {
      to: ['InPreparation'],
    },
    InPreparation: {
      to: ['Done'],
    },
    Done: {
      to: ['Shipped'],
    },
  },
};
