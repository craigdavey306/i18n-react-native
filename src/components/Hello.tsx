import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation, Trans } from 'react-i18next';

const Hello = (): React.JSX.Element => {
  const { t } = useTranslation();

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{t('translation.greeting')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default Hello;
