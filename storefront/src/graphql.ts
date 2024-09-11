import {initGraphQLTada} from 'gql.tada';
import type {introspection} from './graphql-env.d.ts';

export const graphql = initGraphQLTada<{
  introspection: introspection;
  scalars: {
    Money: number
    DateTime: string
  }
}>();

export type {FragmentOf, ResultOf, VariablesOf} from 'gql.tada';
export {readFragment} from 'gql.tada';
