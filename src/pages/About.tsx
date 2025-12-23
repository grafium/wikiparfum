export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="font-serif text-display-3 mb-6">Rólunk</h1>
      
      <div className="prose prose-lg">
        <p className="text-muted-foreground leading-relaxed mb-6">
          A Parfümpedia egy parfüm-enciklopédia, amely segít felfedezni az illatok csodálatos világát. 
          Célunk, hogy átfogó, objektív információkat nyújtsunk a parfümökről, márkákról és illatjegyekről.
        </p>
        
        <h2 className="font-serif text-heading-2 mt-10 mb-4">Küldetésünk</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Szeretnénk mindenki számára elérhetővé tenni a parfüméria tudását. Nem eladni akarunk, 
          hanem tájékoztatni és inspirálni. A részletes illatprofilok, illatpiramisok és 
          összetevő-leírások segítenek megérteni, mi tesz egy-egy parfümöt különlegessé.
        </p>

        <h2 className="font-serif text-heading-2 mt-10 mb-4">Mit találsz nálunk?</h2>
        <ul className="space-y-2 text-muted-foreground mb-6">
          <li>✦ Részletes parfüm-adatlapok illatpiramiddal és akkordokkal</li>
          <li>✦ Márkák története és háttere</li>
          <li>✦ Illatjegyek enciklopédiája</li>
          <li>✦ Szerkesztett gyűjtemények különböző alkalmakra</li>
          <li>✦ Fejlett keresés és szűrés</li>
        </ul>

        <p className="text-muted-foreground leading-relaxed">
          A Parfümpedia folyamatosan bővül új parfümökkel és tartalmakkal. 
          Köszönjük, hogy velünk fedezed fel az illatok világát!
        </p>
      </div>
    </div>
    </div>
  );
}
