import { ObjectDefinitions, type ObjectDefinition } from "../utils/objectDefinitions";

export interface BadgeDefinition extends ObjectDefinition {
    readonly roles?: string[]
}

export const Badges = ObjectDefinitions.create<BadgeDefinition>()(
    () => ({
        badge_factory: (name: string, roles: string[] = []) => ({
            idString: name.toLowerCase().replace(/ /g, "_"),
            name,
            roles
        })
    })
)(
    ({ simple }) => [
        simple("badge_factory", "Youtubr", ["youtubr", "123op", "woaixiaonanniang"]),
        simple("badge_factory", "Developr", ["developr", "error", "woaixiaonanniang"]),
        simple("badge_factory", "Lead Designr", ["lead_designr", "woaixiaonanniang"]),
        simple("badge_factory", "VIP Designr", ["vip_designr", "woaixiaonanniang"]),
        simple("badge_factory", "Composr", ["composr", "woaixiaonanniang"]),
        simple("badge_factory", "Lead Composr", ["lead_composr", "woaixiaonanniang"]),
        simple("badge_factory", "Moderatr", ["moderatr", "woaixiaonanniang"]),
        simple("badge_factory", "Trial Moderatr", ["trial_moderatr", "woaixiaonanniang"]),
        simple("badge_factory", "Studio Managr", ["studio_managr", "woaixiaonanniang"]),
        simple("badge_factory", "Boostr", ["boostr", "woaixiaonanniang"]),
        simple("badge_factory", "Designr", ["designr", "woaixiaonanniang"]),
        simple("badge_factory", "Ownr", ["hasanger", "woaixiaonanniang"]),
        simple("badge_factory", "Contributr+", ["katie", "leia", "woaixiaonanniang"]),
        simple("badge_factory", "Bleh"),
        simple("badge_factory", "Froog"),
        simple("badge_factory", "AEGIS Logo"),
        simple("badge_factory", "Flint Logo"),
        simple("badge_factory", "Duel")
    ]
);
