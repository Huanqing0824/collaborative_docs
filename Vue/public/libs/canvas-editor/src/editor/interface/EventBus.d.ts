import { IContentChange, IControlChange, IIntersectionPageNoChange, IPageModeChange, IPageScaleChange, IPageSizeChange, IRangeStyleChange, ISaved, IVisiblePageNoListChange, IZoneChange, IConnected, IDisconnected } from './Listener';
export interface EventBusMap {
    rangeStyleChange: IRangeStyleChange;
    visiblePageNoListChange: IVisiblePageNoListChange;
    intersectionPageNoChange: IIntersectionPageNoChange;
    pageSizeChange: IPageSizeChange;
    pageScaleChange: IPageScaleChange;
    saved: ISaved;
    contentChange: IContentChange;
    controlChange: IControlChange;
    pageModeChange: IPageModeChange;
    zoneChange: IZoneChange;
    connected: IConnected;
    disconnected: IDisconnected;
}
