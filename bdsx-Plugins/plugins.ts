// made by Hailed
// 참고 ET-bdsx-chat-main https://github.com/ETomlet08/ET
import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { CANCEL } from "bdsx/common";
import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";
import { command } from "bdsx/command";
import { Form } from "bdsx/bds/form";



// start code

events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni, id) => {
    const actor = ni.getActor()!;
    const username = actor.getName()

    let message = ptr.message.replace(/"/gi, `''`);
});

command.register('밤', `밤으로 번경합니다!`CommandPermissionLevel.Operator).overload(async (p, o, op) => {
    const actor = o.getEntity();
    if (!actor?.isPlayer()) {
        return;
    }
    const name = o.getName();
    const ni = actor.getNetworkIdentifier();
    const isYes = await Form.sendTo(ni, {
        type: `modal`,
        title: `§l§aDelay 플러그인`,
        content: `§l밤으로 번경하시겠습니까?`,
        button1: `§l§a네`,
        button2: `§l§4아니요`,
    });
    if (isYes) {
        bedrockServer.executeCommand(`time set night`)
    }
}, {});

command.register('낮', `낮으로 번경합니다!`CommandPermissionLevel.Operator).overload(async (p, o, op) => {
    const actor = o.getEntity();
    if (!actor?.isPlayer()) {
        return;

    }
    const name = o.getName();
    const ni = actor.getNetworkIdentifier();
    const isYes = await Form.sendTo(ni, {
        type: `modal`,
        title: `§l§aDelay 플러그인`,
        content: `§l낮으로 번경하시겠습니까?`,
        button1: `§l§a네`,
        button2: `§l§4아니요`,
    });
    if (isYes) {
        bedrockServer.executeCommand(`time set day`)
    }
}, {});
