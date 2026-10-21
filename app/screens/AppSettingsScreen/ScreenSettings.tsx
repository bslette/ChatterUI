import * as KeepAwake from 'expo-keep-awake'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { useMMKVBoolean } from 'react-native-mmkv'

import ThemedSwitch from '@components/input/ThemedSwitch'
import SectionTitle from '@components/text/SectionTitle'
import { AppSettings } from '@lib/constants/GlobalValues'

const ScreenSettings = () => {
    const { t } = useTranslation()
    const [unlockOrientation, setUnlockOrientation] = useMMKVBoolean(AppSettings.UnlockOrientation)
    const [keepAwake, setKeepAwake] = useMMKVBoolean(AppSettings.KeepAwake)
    const [reduceMotion, setReduceMotion] = useMMKVBoolean(AppSettings.ReduceMotion)
    return (
        <View style={{ rowGap: 8 }}>
            <SectionTitle>{t('settings.screen.title')}</SectionTitle>
            <ThemedSwitch
                label={t('settings.screen.unlockOrientation')}
                description={t('settings.screen.unlockOrientationDescription')}
                value={unlockOrientation}
                onChangeValue={setUnlockOrientation}
            />

            <ThemedSwitch
                label={t('settings.screen.keepAwake')}
                description={t('settings.screen.keepAwakeDescription')}
                value={keepAwake}
                onChangeValue={(value) => {
                    setKeepAwake(value)
                    if (value) KeepAwake.activateKeepAwakeAsync()
                    else KeepAwake.deactivateKeepAwake()
                }}
            />

            <ThemedSwitch
                label={t('settings.screen.reduceMotion')}
                description={t('settings.screen.reduceMotionDescription')}
                value={reduceMotion}
                onChangeValue={setReduceMotion}
            />
        </View>
    )
}

export default ScreenSettings
