export const SECTION_IDS = ["hero", "about", "projects", "experience", "contact"] as const;

export type ScrollState = {
  progress: number;
  markers: number[];
};

export function createScrollState(): ScrollState {
  return {
    progress: 0,
    markers: [0, 0.18, 0.36, 0.54, 0.78],
  };
}

export function measureScroll(state: ScrollState) {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  state.progress = max > 0 ? window.scrollY / max : 0;

  let previous = 0;
  state.markers = SECTION_IDS.map((id) => {
    const element = document.getElementById(id);
    if (!element || max <= 0) return previous;
    const top = element.getBoundingClientRect().top + window.scrollY;
    const value = Math.min(1, Math.max(previous, top / max));
    previous = value;
    return value;
  });
}
