import { NgerPlatformStyle } from './style';
import { StaticProvider } from 'nger-di';
import { NgerCompilerImage } from './assets/image';
import { NgerCompilerUglify } from './ts/uglify';
import { NgerCompilerBabel } from './ts/babel';
import { NgerCompilerTypescript } from './ts/typescript';
import { NgerCompilerRollup } from './ts/rollup';
import { NgerCompilerNgTemplate, Visitor, Node } from './html/ng';
import { NgerCompilerCid } from './helper/cid';
import { NgerCompilerNgMetadata } from './helper/ng_metadata';
import { controllerPropertyTransformerFactory, hasMetadata } from './transformer_factorys/controller';
import { componentRenderTransformerFactory } from './transformer_factorys/component';
import { WATCH_TASK, Task } from './tokens/watch_task';
import { metadataCache, hasHandlerFileCache, templateCache } from './bootstrap';
export { NgerCompilerImage, NgerCompilerUglify, NgerPlatformStyle, NgerCompilerTypescript, NgerCompilerRollup, NgerCompilerNgTemplate, NgerCompilerCid, NgerCompilerNgMetadata, NgerCompilerBabel, controllerPropertyTransformerFactory, WATCH_TASK, Task, hasMetadata, metadataCache, hasHandlerFileCache, templateCache, componentRenderTransformerFactory, Visitor, Node };
declare const provides: StaticProvider[];
export default provides;