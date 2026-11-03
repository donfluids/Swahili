import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { languageScript, scriptureFont } from '../fonts';
import { useT } from '../i18n';
import { useSettings } from '../settings';
import { MAX_CONTENT_WIDTH } from '../text';
import { useTheme } from '../theme';
import type { Language } from '../edition';
import type { Ref } from '../types';

interface Props {
  onBack: () => void;
  onOpenRef: (ref: Ref) => void;
}

// A piece of a paragraph: plain text, or a reference that opens its verse.
type Piece = string | { text: string; ref: Ref };

const MATTHEW_10_5 = { book: 40, chapter: 10, verse: 5 };
const MATTHEW_10_8 = { book: 40, chapter: 10, verse: 8 };
const JOHN_17_3 = { book: 43, chapter: 17, verse: 3 };
const GALATIANS_2_20 = { book: 48, chapter: 2, verse: 20 };

/**
 * Why this Bible was made, in the author's words, in the interface language. The verses
 * quoted are those of the interface language's Bible (the KJV in English, the ULB in Swahili).
 */
const PARAGRAPHS: Record<Language, Piece[][]> = {
  en: [
    [
      'This Bible was made to bring the word of God within reach of all who need it. It was inspired by Bibles that others have given, and it rests on the work of many who went before us.',
    ],
    [
      'In offering it, we follow the Lord Jesus. When He sent out the twelve disciples (',
      { text: 'Matthew 10:5–10', ref: MATTHEW_10_5 },
      '), He told them to take nothing with them, for those who work for Him will be given what they need, and He said: “Freely ye have received, freely give” (',
      { text: 'Matthew 10:8', ref: MATTHEW_10_8 },
      ').',
    ],
    [
      'But the word is given for a purpose. Wherever you are on your journey, whether you are new to the faith or have walked with Him for many years, we pray that you come to know the Lord Jesus more and more. Having the word is not enough on its own; our hope is that you will spend time with Him, meditating on His word and drawing closer to Him.',
    ],
    [
      'To help with that, the Hebrew and Greek words are here to help you understand the text. But more than understanding, it is the Holy Spirit who lights up a life. That is His ministry.',
    ],
    [
      'And to know Him is life itself: “And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent” (',
      { text: 'John 17:3', ref: JOHN_17_3 },
      '). May the Holy Spirit be with you on that journey and, like a fire, burn away your troubles, so that they no longer weigh on you, for it is He who carries them, not we. And may we give to that fire not only our burdens but our old life, on the altar of God, so that, as Paul says, we are crucified with Christ, and it is no longer we who live but Christ who lives in us (',
      { text: 'Galatians 2:20', ref: GALATIANS_2_20 },
      '), and we find new life wholly in the Lord Jesus, living in His glory every moment, for ever.',
    ],
    ['Amen.'],
  ],
  sw: [
    [
      'Biblia hii ilitengenezwa ili kuliweka neno la Mungu karibu na wote wanaolihitaji. Ilitokana na Biblia ambazo wengine wametoa, na inasimama juu ya kazi ya wengi waliotangulia mbele yetu.',
    ],
    [
      'Tunapoitoa, tunamfuata Bwana Yesu. Alipowatuma wale wanafunzi kumi na wawili (',
      { text: 'Mathayo 10:5–10', ref: MATTHEW_10_5 },
      '), aliwaambia wasichukue kitu, kwa maana wanaomtumikia watapewa wanachohitaji, naye akasema: “Mmepokea bure, toeni bure” (',
      { text: 'Mathayo 10:8', ref: MATTHEW_10_8 },
      ').',
    ],
    [
      'Lakini neno limetolewa kwa kusudi. Popote ulipo katika safari yako, uwe mgeni katika imani au umetembea naye kwa miaka mingi, tunaomba umjue Bwana Yesu zaidi na zaidi. Kuwa na neno peke yake hakutoshi; tumaini letu ni kwamba utakaa naye, ukilitafakari neno lake na kumkaribia zaidi.',
    ],
    [
      'Ili kusaidia katika hilo, maneno ya Kiebrania na Kiyunani yamewekwa hapa yakusaidie kuelewa maandiko. Lakini zaidi ya kuelewa, ni Roho Mtakatifu anayeangaza maisha. Hiyo ndiyo huduma yake.',
    ],
    [
      'Na kumjua yeye ndio uzima wenyewe: “Huu ndio uzima wa milele: kwamba wakujue wewe, Mungu wa kweli na wa pekee, na yeye uliyemtuma, Yesu Kristo” (',
      { text: 'Yohana 17:3', ref: JOHN_17_3 },
      '). Roho Mtakatifu na awe pamoja nawe katika safari hiyo na, kama moto, ateketeze taabu zako, zisikulemee tena, kwa maana ndiye anayezibeba, si sisi. Na tuupe moto huo si mizigo yetu tu bali pia maisha yetu ya zamani, juu ya madhabahu ya Mungu, ili, kama Paulo anavyosema, tuwe tumesulubiwa pamoja na Kristo, wala si sisi tena tunaoishi bali Kristo anaishi ndani yetu (',
      { text: 'Wagalatia 2:20', ref: GALATIANS_2_20 },
      '), nasi tupate uzima mpya kabisa katika Bwana Yesu, tukiishi katika utukufu wake kila wakati, milele.',
    ],
    ['Amina.'],
  ],
};

export function WhyScreen({ onBack, onOpenRef }: Props) {
  const theme = useTheme();
  const t = useT();
  const insets = useSafeAreaInsets();
  const { settings } = useSettings();
  const language = settings.language;
  const font = scriptureFont(languageScript(language), settings.serif) ?? theme.font;
  const size = settings.fontSize;
  return (
    <>
      <Header title={t('whyThisBible')} onBack={onBack} />
      <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 40 }]}>
        {PARAGRAPHS[language].map((pieces, i) => (
          <Text key={i} selectable style={[styles.paragraph, { color: theme.text, fontFamily: font, fontSize: size, lineHeight: Math.round(size * 1.6) }]}>
            {pieces.map((p, j) =>
              typeof p === 'string' ? (
                p
              ) : (
                <Text key={j} onPress={() => onOpenRef(p.ref)} accessibilityRole="link" style={{ color: theme.accent, textDecorationLine: 'underline' }}>
                  {p.text}
                </Text>
              ),
            )}
          </Text>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: { alignSelf: 'center', width: '100%', maxWidth: MAX_CONTENT_WIDTH, paddingHorizontal: 20, paddingTop: 8 },
  paragraph: { marginBottom: 16 },
});
