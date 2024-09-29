import { app_todo_completed_property } from "./app_todo_completed_property.mjs";
import { app_todo_daily } from "./app_todo_daily.mjs";
import { app_todo_type } from "./app_todo_type.mjs";
import { app_todo_not_completed } from "./app_todo_not_completed.mjs";
export function app_todo_properties() {
  return [
    {
      name: app_todo_completed_property(),
      choices: [app_todo_not_completed(), "✅ completed"],
    },
    {
      name: app_todo_type(),
      choices: ["one-time", app_todo_daily()],
    },
  ];
}
