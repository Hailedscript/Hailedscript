"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// made by Hailed
// 참고 ET-bdsx-chat-main https://github.com/ETomlet08/ET
const packetids_1 = require("bdsx/bds/packetids");
const event_1 = require("bdsx/event");
const launcher_1 = require("bdsx/launcher");
const command_1 = require("bdsx/command");
const form_1 = require("bdsx/bds/form");
// start code
event_1.events.packetBefore(packetids_1.MinecraftPacketIds.Text).on((ptr, ni, id) => {
    const actor = ni.getActor();
    const username = actor.getName();
    let message = ptr.message.replace(/"/gi, `''`);
});
command_1.command.register('밤', `밤으로 번경합니다!`, CommandPermissionLevel.Operator).overload(async (p, o, op) => {
    const actor = o.getEntity();
    if (!(actor === null || actor === void 0 ? void 0 : actor.isPlayer())) {
        return;
    }
    const name = o.getName();
    const ni = actor.getNetworkIdentifier();
    const isYes = await form_1.Form.sendTo(ni, {
        type: `modal`,
        title: `§l§aDelay 플러그인`,
        content: `§l밤으로 번경하시겠습니까?`,
        button1: `§l§a네`,
        button2: `§l§4아니요`,
    });
    if (isYes) {
        launcher_1.bedrockServer.executeCommand(`time set night`);
    }
}, {});
command_1.command.register('낮', `낮으로 번경합니다!`, CommandPermissionLevel.Operator).overload(async (p, o, op) => {
    const actor = o.getEntity();
    if (!(actor === null || actor === void 0 ? void 0 : actor.isPlayer())) {
        return;
    }
    const name = o.getName();
    const ni = actor.getNetworkIdentifier();
    const isYes = await form_1.Form.sendTo(ni, {
        type: `modal`,
        title: `§l§aDelay 플러그인`,
        content: `§l낮으로 번경하시겠습니까?`,
        button1: `§l§a네`,
        button2: `§l§4아니요`,
    });
    if (isYes) {
        launcher_1.bedrockServer.executeCommand(`time set day`);
    }
}, {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2lucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsdWdpbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQkFBaUI7QUFDakIsdURBQXVEO0FBQ3ZELGtEQUF3RDtBQUV4RCxzQ0FBb0M7QUFDcEMsNENBQThDO0FBQzlDLDBDQUF1QztBQUN2Qyx3Q0FBcUM7QUFJckMsYUFBYTtBQUViLGNBQU0sQ0FBQyxZQUFZLENBQUMsOEJBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUM1RCxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFHLENBQUM7SUFDN0IsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBRWhDLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUEsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQzNGLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM1QixJQUFJLENBQUMsQ0FBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsUUFBUSxFQUFFLENBQUEsRUFBRTtRQUNwQixPQUFPO0tBQ1Y7SUFDRCxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDekIsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDeEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxXQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtRQUNoQyxJQUFJLEVBQUUsT0FBTztRQUNiLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkIsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixPQUFPLEVBQUUsT0FBTztRQUNoQixPQUFPLEVBQUUsU0FBUztLQUNyQixDQUFDLENBQUM7SUFDSCxJQUFJLEtBQUssRUFBRTtRQUNQLHdCQUFhLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUE7S0FDakQ7QUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFUCxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsWUFBWSxFQUFBLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUMzRixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDNUIsSUFBSSxDQUFDLENBQUEsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFFBQVEsRUFBRSxDQUFBLEVBQUU7UUFDcEIsT0FBTztLQUVWO0lBQ0QsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3pCLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sS0FBSyxHQUFHLE1BQU0sV0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7UUFDaEMsSUFBSSxFQUFFLE9BQU87UUFDYixLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsT0FBTyxFQUFFLE9BQU87UUFDaEIsT0FBTyxFQUFFLFNBQVM7S0FDckIsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxLQUFLLEVBQUU7UUFDUCx3QkFBYSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQTtLQUMvQztBQUNMLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyJ9