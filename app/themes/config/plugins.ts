import {AnimationResolver} from '@gluestack-style/animation-resolver';
import {MotionAnimationDriver} from '@gluestack-style/legend-motion-animation-driver';

export default [new AnimationResolver(MotionAnimationDriver)] as const;
