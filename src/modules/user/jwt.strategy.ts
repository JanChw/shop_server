import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport"
import { Strategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import { UserService } from "./user.service";
import { JwtPayload } from "./auth.interface";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor (private readonly userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'online_shop',
        })
    }

    async validate (payload: JwtPayload) {
        let { phone } = payload

        let user = await this.userService.find({ phone })
        
        if (!user) throw new UnauthorizedException('用户不存在')

        return user

    }

}