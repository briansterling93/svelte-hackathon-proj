export function getPlanBadgeColor(plan: string): string {
  switch (plan) {
    case "Enterprise":
      return "enterprise";
    case "Professional":
    case "Premium":
      return "professional-premium";
    case null:
    case undefined:
      return "inactive";
    default:
      return "other";
  }
}
