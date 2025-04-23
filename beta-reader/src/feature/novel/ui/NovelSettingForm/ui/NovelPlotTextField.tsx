import * as TextField from "@/shared/ui/TextField";

import { NOVEL_SETTING_FORM, NOVEL_SETTING_TEXT } from "../config";
import { useNovelSettingFormStore } from "../lib";

export const NovelPlotTextField = () => {
  const setPlot = useNovelSettingFormStore((state) => state.setPlot);

  return (
    <TextField.Container className="flex flex-col gap-4">
      <TextField.Label htmlFor={NOVEL_SETTING_FORM.PLOT.name}>
        {NOVEL_SETTING_TEXT.PLOT}
      </TextField.Label>
      <TextField.TextArea
        name={NOVEL_SETTING_FORM.PLOT.name}
        id={NOVEL_SETTING_FORM.PLOT.name}
        placeholder={NOVEL_SETTING_FORM.PLOT.placeholder}
        resize
        rows={4}
        className="text-body-1-medium"
        onChange={({ target }) => setPlot(target.value)}
      />
    </TextField.Container>
  );
};
