import {Asset, User} from "@vendure/core";

/**
 * @description
 * The plugin can be configured using the following options:
 */
export interface PluginInitOptions {

}

export type RestaurantListingOptions = {
  skip: number;
  take: number;
  onlyOpen: boolean;
}

declare module '@vendure/core/dist/entity/custom-entity-fields' {
  interface CustomSellerFields {
    isOpen: boolean;
    address: string;
    phoneNumber: string;
    logo: Asset;
    user: User;
  }
}
