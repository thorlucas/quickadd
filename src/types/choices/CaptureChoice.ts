import {Choice} from "./Choice";
import {ChoiceType} from "./choiceType";
import type ICaptureChoice from "./ICaptureChoice";
import type {NewTabDirection} from "../newTabDirection";

export class CaptureChoice extends Choice implements ICaptureChoice {
    appendLink: boolean;
    captureTo: string;
    captureToActiveFile: boolean;
    createFileIfItDoesntExist: { enabled: boolean, createWithTemplate: boolean, template: string };
    format: { enabled: boolean; format: string };
    insertAfter: { enabled: boolean; after: string, insertAtEnd: boolean, createIfNotFound: boolean, createIfNotFoundLocation: string };
    prepend: boolean;
    task: boolean;
    openFileInNewTab: { enabled: boolean; direction: NewTabDirection };
    openFile: boolean;

    constructor(name: string) {
        super(name, ChoiceType.Capture);

        this.appendLink = false;
        this.captureTo = "";
        this.captureToActiveFile = false;
        this.createFileIfItDoesntExist = {enabled: false, createWithTemplate: false, template: ""};
        this.format = {enabled: false, format: ""};
        this.insertAfter = {enabled: false, after: "", insertAtEnd: false, createIfNotFound: false, createIfNotFoundLocation: "top"};
        this.prepend = false;
        this.task = false;
    }

    public static Load(choice: ICaptureChoice): CaptureChoice {
        return choice as CaptureChoice;
    }
}