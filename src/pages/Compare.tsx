import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeftRight, X, ChevronDown } from "lucide-react";
import { perfumes, getPerfumeById } from "@/data/perfumes";
import { brands } from "@/data/brands";
import { getNoteById } from "@/data/notes";
import { getPerfumeImageById } from "@/data/perfumeImages";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { Perfume } from "@/data/types";

const seasonLabels: Record<string, string> = {
  tavasz: "Tavasz",
  nyár: "Nyár",
  ősz: "Ősz",
  tél: "Tél",
};

const occasionLabels: Record<string, string> = {
  iroda: "Iroda",
  randi: "Randi",
  hétköznapi: "Hétköznapi",
  elegáns: "Elegáns",
  sport: "Sport",
  esti: "Esti",
};

const getBrandById = (brandId: string) => {
  return brands.find((b) => b.id === brandId);
};

function PerfumeSelector({
  selectedPerfume,
  onSelect,
  otherPerfumeId,
}: {
  selectedPerfume: Perfume | null;
  onSelect: (perfume: Perfume) => void;
  otherPerfumeId?: string;
}) {
  const [open, setOpen] = useState(false);

  const availablePerfumes = perfumes.filter((p) => p.id !== otherPerfumeId);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between h-12 border-border"
        >
          {selectedPerfume ? (
            <span className="truncate">
              {getBrandById(selectedPerfume.brandId)?.name} - {selectedPerfume.name}
            </span>
          ) : (
            <span className="text-muted-foreground">Válassz parfümöt...</span>
          )}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput placeholder="Keresés parfümök között..." />
          <CommandList>
            <CommandEmpty>Nincs találat.</CommandEmpty>
            <CommandGroup>
              {availablePerfumes.map((perfume) => {
                const brand = getBrandById(perfume.brandId);
                return (
                  <CommandItem
                    key={perfume.id}
                    value={`${brand?.name} ${perfume.name}`}
                    onSelect={() => {
                      onSelect(perfume);
                      setOpen(false);
                    }}
                  >
                    {brand?.name} - {perfume.name}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function RatingBar({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className={`h-2 w-6 ${
            i < value ? "bg-primary" : "bg-muted"
          }`}
        />
      ))}
    </div>
  );
}

function PerfumeCard({
  perfume,
  onClear,
  position,
}: {
  perfume: Perfume;
  onClear: () => void;
  position: "left" | "right";
}) {
  const brand = getBrandById(perfume.brandId);
  const perfumeImage = getPerfumeImageById(perfume.id);

  const topNotes = perfume.topNotes.map((id) => getNoteById(id)).filter(Boolean);
  const heartNotes = perfume.heartNotes.map((id) => getNoteById(id)).filter(Boolean);
  const baseNotes = perfume.baseNotes.map((id) => getNoteById(id)).filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, x: position === "left" ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="relative"
    >
      <button
        onClick={onClear}
        className="absolute top-2 right-2 z-10 p-1.5 bg-background/80 hover:bg-background transition-colors"
      >
        <X className="h-4 w-4" />
      </button>

      {/* Image */}
      <Link to={`/perfumes/${perfume.slug}`}>
        <div className="aspect-square overflow-hidden bg-muted mb-4">
          <img
            src={perfumeImage}
            alt={perfume.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Basic Info */}
      <div className="space-y-4">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            {brand?.name}
          </p>
          <h3 className="font-serif text-xl mt-1">{perfume.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {perfume.gender} • {perfume.concentration} • {perfume.releaseYear}
          </p>
        </div>

        {/* Family & Accords */}
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
            Illatcsalád
          </p>
          <p className="text-sm capitalize">{perfume.family}</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
            Akkordok
          </p>
          <div className="flex flex-wrap gap-1.5">
            {perfume.accords.map((accord) => (
              <span
                key={accord}
                className="text-xs px-2 py-1 bg-muted"
              >
                {accord}
              </span>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="space-y-3">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              Fejjegyek
            </p>
            <div className="flex flex-wrap gap-1.5">
              {topNotes.map((note) => (
                <span
                  key={note!.id}
                  className="text-xs px-2 py-1 bg-primary/10 text-primary"
                >
                  {note!.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              Szívjegyek
            </p>
            <div className="flex flex-wrap gap-1.5">
              {heartNotes.map((note) => (
                <span
                  key={note!.id}
                  className="text-xs px-2 py-1 bg-secondary"
                >
                  {note!.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              Alapjegyek
            </p>
            <div className="flex flex-wrap gap-1.5">
              {baseNotes.map((note) => (
                <span
                  key={note!.id}
                  className="text-xs px-2 py-1 bg-muted-foreground/10"
                >
                  {note!.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Performance */}
        <div className="space-y-3 pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              Tartósság
            </p>
            <RatingBar value={perfume.longevity} />
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              Vetítés
            </p>
            <RatingBar value={perfume.sillage} />
          </div>
        </div>

        {/* Seasons & Occasions */}
        <div className="space-y-3 pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              Évszakok
            </p>
            <div className="flex flex-wrap gap-1.5">
              {perfume.seasons.map((season) => (
                <span
                  key={season}
                  className="text-xs px-2 py-1 bg-muted"
                >
                  {seasonLabels[season]}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              Alkalmak
            </p>
            <div className="flex flex-wrap gap-1.5">
              {perfume.occasions.map((occasion) => (
                <span
                  key={occasion}
                  className="text-xs px-2 py-1 bg-muted"
                >
                  {occasionLabels[occasion]}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function EmptySlot({ onSelect, otherPerfumeId }: { onSelect: (perfume: Perfume) => void; otherPerfumeId?: string }) {
  return (
    <div className="border border-dashed border-border p-8 flex flex-col items-center justify-center min-h-[400px]">
      <ArrowLeftRight className="h-12 w-12 text-muted-foreground/40 mb-4" />
      <p className="text-muted-foreground text-center mb-4">
        Válassz egy parfümöt az összehasonlításhoz
      </p>
      <div className="w-full max-w-xs">
        <PerfumeSelector
          selectedPerfume={null}
          onSelect={onSelect}
          otherPerfumeId={otherPerfumeId}
        />
      </div>
    </div>
  );
}

export default function Compare() {
  const [perfume1, setPerfume1] = useState<Perfume | null>(null);
  const [perfume2, setPerfume2] = useState<Perfume | null>(null);

  const handleSwap = () => {
    const temp = perfume1;
    setPerfume1(perfume2);
    setPerfume2(temp);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-serif text-display-3 mb-4">Parfüm összehasonlítás</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Válassz két parfümöt és hasonlítsd össze az illatjegyeiket, teljesítményüket és karakterüket.
        </p>
      </div>

      {/* Selectors for both when both are selected */}
      {perfume1 && perfume2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <PerfumeSelector
            selectedPerfume={perfume1}
            onSelect={setPerfume1}
            otherPerfumeId={perfume2?.id}
          />
          <PerfumeSelector
            selectedPerfume={perfume2}
            onSelect={setPerfume2}
            otherPerfumeId={perfume1?.id}
          />
        </div>
      )}

      {/* Comparison Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Swap Button */}
        {perfume1 && perfume2 && (
          <button
            onClick={handleSwap}
            className="hidden md:flex absolute left-1/2 top-32 -translate-x-1/2 z-10 p-3 bg-background border border-border hover:border-foreground transition-colors"
          >
            <ArrowLeftRight className="h-5 w-5" />
          </button>
        )}

        {/* Left Side */}
        <div>
          {perfume1 ? (
            <PerfumeCard
              perfume={perfume1}
              onClear={() => setPerfume1(null)}
              position="left"
            />
          ) : (
            <EmptySlot onSelect={setPerfume1} otherPerfumeId={perfume2?.id} />
          )}
        </div>

        {/* Right Side */}
        <div>
          {perfume2 ? (
            <PerfumeCard
              perfume={perfume2}
              onClear={() => setPerfume2(null)}
              position="right"
            />
          ) : (
            <EmptySlot onSelect={setPerfume2} otherPerfumeId={perfume1?.id} />
          )}
        </div>
      </div>

      {/* Quick Actions */}
      {(perfume1 || perfume2) && (
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            onClick={() => {
              setPerfume1(null);
              setPerfume2(null);
            }}
          >
            Új összehasonlítás
          </Button>
        </div>
      )}
    </div>
  );
}
