import {Directive, HostListener, Inject, Input} from '@angular/core';
import {SnackBarService} from './snack-bar.service';

@Directive({
  selector: '[appCopy]'
})
export class CopyDirective {
  @Input() appCopy: string;

  constructor(
    @Inject('Navigator') private navigator: Navigator,
    @Inject('Document') private document: Document,
    public snackbar: SnackBarService,
  ) {
  }

  @HostListener('click')
  public async copyValue(): Promise<void> {
    try {
      await this.navigator.clipboard.writeText(this.appCopy);
      this.document.execCommand('copy');
      this.snackbar.callSnackBar('Copied');
    } catch (e) {
      this.snackbar.callSnackBar('Copy Failed');
    }
  }

}
