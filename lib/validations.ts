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
    .max(120),
  createType: z.enum(["STANDARD", "MEETUP", "PODCAST"]),
  group: z.string(),
  coverImage: z.string().optional(),
  audioFile: z.string().optional(),
  audioTitle: z.string().optional(),
  meetupLocation: z.string().optional(),
  meetupDate: z
    .date({
      required_error: "A date for the meetup is required.",
    })
    .optional(),
  tinyContent: z.string(),
  interestTechTags: z
    .array(z.string())
    .max(7, { message: "You can only add 7 tags" }),
});

export type TCreatePostSchema = z.infer<typeof createPostSchema>;
