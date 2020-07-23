export class SigninDto {
  readonly phone: string
  readonly password: string
}

export class UpdatePasswordDto {
  readonly password: string
  readonly newPassword: string
}