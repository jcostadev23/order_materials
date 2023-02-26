import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerORDERMATERIALS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ORDERMATERIALS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyORDERMATERIALS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ORDERMATERIALS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ORDERMATERIALS = LazyLoading extends LazyLoadingDisabled ? EagerORDERMATERIALS : LazyORDERMATERIALS

export declare const ORDERMATERIALS: (new (init: ModelInit<ORDERMATERIALS>) => ORDERMATERIALS) & {
  copyOf(source: ORDERMATERIALS, mutator: (draft: MutableModel<ORDERMATERIALS>) => MutableModel<ORDERMATERIALS> | void): ORDERMATERIALS;
}