declare global {
    function h(): any;
    namespace JSX {
        interface Element { }
        interface ElementClass {
            render(): any;
        }
        interface IntrinsicElements {
            text: any;
            RichText: any;
            progress: any;
            icon: any;
            CoverImage: any;
            CoverView: any;

        }
    }
}