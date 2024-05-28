import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z
      .string()
      .min(4, { message: "Username must be between 4 and 20 characters" })
      .max(20),
    email: z.string({ required_error: "is required" }).email("Must be valid"),
    password: z
      .string()
      .min(8, { message: "Must be at least 8 characters long." })
      .max(10),
    confirmPassword: z
      .string()
      .min(8, { message: "Must be at least 8 characters long." })
      .max(10),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export const createPostSchema = z.object({
  title: z
    .string()
    .min(4, { message: "Title must be between 4 and 20 characters" })
    .max(20),
  createType: z.enum(["Post", "Meetup", "Podcast"]),
  group: z.string(),
  tinyContent: z.string(),
  tags: z.string(),
});

export type TCreatePostSchema = z.infer<typeof createPostSchema>;
