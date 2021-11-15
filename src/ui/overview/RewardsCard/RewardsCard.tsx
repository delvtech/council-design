import React, { ReactElement } from "react";

import { Signer } from "ethers";
import tw from "src/elf-tailwindcss-classnames";
import Card from "src/ui/base/Card/Card";
import H2 from "src/ui/base/H2";
import { useDelegate } from "src/ui/delegate/useDelegate";
import FeaturedDelegatesTable from "src/ui/overview/FeaturedDelegatesTable";
import { t } from "ttag";

import { ClaimAndDelegateSection } from "./ClaimAndDelegateSection";
import { ClaimSection } from "./ClaimSection";

interface RewardsCardProps {
  account: string | undefined | null;
  signer: Signer | undefined;
}

export default function RewardsCard(props: RewardsCardProps): ReactElement {
  const { account, signer } = props;
  const delegate = useDelegate(account);

  return (
    <Card className={tw("w-full")}>
      <H2
        className={tw("text-blue-900", "font-semibold", "pb-4")}
      >{t`Rewards`}</H2>
      <div className={tw("space-y-12")}>
        <ClaimAndDelegateSection account={account} signer={signer} />
        {!delegate && <FeaturedDelegatesTable />}
        <ClaimSection account={account} signer={signer} />
      </div>
    </Card>
  );
}
