import { BladeApi, Pane } from 'tweakpane'
import * as EssentialsPlugin from '@tweakpane/plugin-essentials'
import { BladeController, TpEvent, View } from '@tweakpane/core'
import { directionalLight } from './factories'

interface FPSGraph extends BladeApi<BladeController<View>> {
  begin(): void
  end(): void
}

export class GameDebugGui {
  gui: Pane = new Pane();
  fps: FPSGraph;

  constructor() {
    this.gui.registerPlugin(EssentialsPlugin)

    this.fps = this.gui.addBlade({
      view: 'fpsgraph',
      label: 'fpsgraph'
    }) as FPSGraph;

    const button_command: ButtonCommand = {
      title: 'Add Entity',
      label: 'Entity Control',
      cb: () => {
        console.log('Add Entity')
      }
    }


    this.addButton(button_command);
  }

  build() {
    return this;
  }

  addButton(opt: ButtonCommand) {

    const button = this.gui.addButton({
      title: 'Add Entity',
      label: 'Entity Control'
    })

    button.on('click', opt.cb)

  }

  addLightControls() {

    const DirectionalLightFolder = debug_ui.gui.addFolder({
      title: 'Directional Light',
    })

    Object.keys(directionalLight.position).forEach(key => {
      DirectionalLightFolder.addInput(
        directionalLight.position,
        key as keyof THREE.Vector3,
        {
          min: -100,
          max: 100,
          step: 1,
        },
      )
    })

  }

}

export interface ButtonCommand {
  title: string,
  label?: string,
  cb: TpEvent;
}

export const debug_ui = new GameDebugGui();
