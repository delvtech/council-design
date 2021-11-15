import React, { ReactElement } from "react";
import SimpleDialog from "src/ui/base/Dialog/Dialog";
import { ConnectWalletButtons } from "src/ui/wallet/ConnectWalletButtons/ConnectWalletButtons";

interface ConnectWalletDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
export function ConnectWalletDialog({
  isOpen,
  onClose,
}: ConnectWalletDialogProps): ReactElement {
  return (
    <SimpleDialog isOpen={isOpen} onClose={onClose}>
      <ConnectWalletButtons onClick={onClose} />
    </SimpleDialog>
  );
}
