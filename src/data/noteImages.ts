// Note image imports
import bergamot from '@/assets/notes/bergamot.jpg';
import lemon from '@/assets/notes/lemon.jpg';
import orange from '@/assets/notes/orange.jpg';
import grapefruit from '@/assets/notes/grapefruit.jpg';
import mandarin from '@/assets/notes/mandarin.jpg';
import rose from '@/assets/notes/rose.jpg';
import jasmine from '@/assets/notes/jasmine.jpg';
import tuberose from '@/assets/notes/tuberose.jpg';
import iris from '@/assets/notes/iris.jpg';
import ylang from '@/assets/notes/ylang.jpg';
import neroli from '@/assets/notes/neroli.jpg';
import lilyOfValley from '@/assets/notes/lily-of-valley.jpg';
import violet from '@/assets/notes/violet.jpg';
import cardamom from '@/assets/notes/cardamom.jpg';
import pinkPepper from '@/assets/notes/pink-pepper.jpg';
import cinnamon from '@/assets/notes/cinnamon.jpg';
import clove from '@/assets/notes/clove.jpg';
import ginger from '@/assets/notes/ginger.jpg';
import saffron from '@/assets/notes/saffron.jpg';
import sandalwood from '@/assets/notes/sandalwood.jpg';
import cedar from '@/assets/notes/cedar.jpg';
import vetiver from '@/assets/notes/vetiver.jpg';
import oud from '@/assets/notes/oud.jpg';
import patchouli from '@/assets/notes/patchouli.jpg';
import musk from '@/assets/notes/musk.jpg';
import amber from '@/assets/notes/amber.jpg';
import labdanum from '@/assets/notes/labdanum.jpg';
import vanilla from '@/assets/notes/vanilla.jpg';
import tonka from '@/assets/notes/tonka.jpg';
import benzoin from '@/assets/notes/benzoin.jpg';
import blackcurrant from '@/assets/notes/blackcurrant.jpg';
import peach from '@/assets/notes/peach.jpg';
import apple from '@/assets/notes/apple.jpg';
import basil from '@/assets/notes/basil.jpg';
import lavender from '@/assets/notes/lavender.jpg';
import mint from '@/assets/notes/mint.jpg';
import tea from '@/assets/notes/tea.jpg';
import incense from '@/assets/notes/incense.jpg';
import myrrh from '@/assets/notes/myrrh.jpg';
import oakmoss from '@/assets/notes/oakmoss.jpg';
import leather from '@/assets/notes/leather.jpg';
import tobacco from '@/assets/notes/tobacco.jpg';
import coffee from '@/assets/notes/coffee.jpg';
import marine from '@/assets/notes/marine.jpg';

export const noteImages: Record<string, string> = {
  bergamot,
  lemon,
  orange,
  grapefruit,
  mandarin,
  rose,
  jasmine,
  tuberose,
  iris,
  ylang,
  neroli,
  'lily-of-valley': lilyOfValley,
  violet,
  cardamom,
  'pink-pepper': pinkPepper,
  cinnamon,
  clove,
  ginger,
  saffron,
  sandalwood,
  cedar,
  vetiver,
  oud,
  patchouli,
  musk,
  amber,
  labdanum,
  vanilla,
  tonka,
  benzoin,
  blackcurrant,
  peach,
  apple,
  basil,
  lavender,
  mint,
  tea,
  incense,
  myrrh,
  oakmoss,
  leather,
  tobacco,
  coffee,
  marine,
};

export const getNoteImage = (noteId: string): string | undefined => {
  return noteImages[noteId];
};
