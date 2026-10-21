import { useMMKVBoolean } from 'react-native-mmkv'

import { AppSettings } from '@lib/constants/GlobalValues'
import { mmkv } from '@lib/storage/MMKV'

/**
 * Whether animations and transitions are turned off (Settings > Screen > Reduce Motion).
 * Reanimated animations follow it through ReducedMotionConfig in the root layout; this
 * covers the React Native Animated ones.
 */
export const useReduceMotion = () => useMMKVBoolean(AppSettings.ReduceMotion)[0] ?? false

/** Same, read once, for event handlers. */
export const getReduceMotion = () => mmkv.getBoolean(AppSettings.ReduceMotion) ?? false
