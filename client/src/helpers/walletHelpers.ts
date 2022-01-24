import { ethers } from "ethers";
import detectMetamaskExtension from "@metamask/detect-provider";
import { AxiosError } from "axios";

interface MetamaskExtension {
  isMetaMask?: boolean;
  request: any;
  chainId: string;
  enable: () => Promise<void>;
}

interface ConnectWalletProviderReturn {
  Provider: MetamaskExtension;
  Web3Provider: ethers.providers.Web3Provider;
}

/**
 * Detects if there is an existing provider and connects to it if it exists.
 * Returns an error otherwise.
 *
 * @returns An MetamaskExtension object and a Web3Provider object
 */
export const connectWalletProvider =
  async (): Promise<ConnectWalletProviderReturn> => {
    try {
      const Provider = (await detectMetamaskExtension({
        mustBeMetaMask: true,
      })) as MetamaskExtension;

      if (!Provider) throw new Error("Please install the Metamask extension");

      await Provider.enable();

      if (Provider !== window.ethereum) {
        throw new Error("Please ensure Metamask is your only installed wallet");
      }

      const Web3Provider = new ethers.providers.Web3Provider(Provider);

      return {
        Provider,
        Web3Provider,
      };
    } catch (err: unknown) {
      const { message } = err as AxiosError;
      console.error(err);
      throw new Error(message);
    }
  };

/**
 * Retrieves the users account address using the api provided by metamask.
 *
 * @returns The address of the metamask account currently attached to the user's browser.
 */
export const getMetamaskAcctAddress = async (): Promise<string> => {
  try {
    if (window.ethereum) {
      const metamaskExtension = window.ethereum as MetamaskExtension;
      const result = await metamaskExtension.request({
        method: "eth_requestAccounts",
      });
      return result[0] as string;
    } else {
      throw new Error();
    }
  } catch (err: unknown) {
    console.error(err);
    throw new Error("Could not retrieve account address");
  }
};
