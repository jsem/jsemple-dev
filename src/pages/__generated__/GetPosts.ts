/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPosts
// ====================================================

export interface GetPosts_posts {
  __typename: "Post";
  id: number;
  identifier: string;
  title: string;
  body: string;
  summary: string;
  visible: boolean;
  createdOn: string;
  updatedOn: string | null;
}

export interface GetPosts {
  posts: (GetPosts_posts | null)[];
}
