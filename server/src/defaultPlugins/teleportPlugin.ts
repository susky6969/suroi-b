import { Vec } from "../../../common/src/utils/vector";
import { Events, GamePlugin } from "../pluginManager";

/**
 * Plugin to teleport a player to a map ping when they send one
 */
export class TeleportPlugin extends GamePlugin {
    protected override initListeners(): void {
        this.on(Events.Player_MapPing, ({ player, position }) => {
            if(!player.isDev) return;
            player.position = Vec.clone(position);
            player.updateObjects = true;
            player.setPartialDirty();
        });
    }
}
