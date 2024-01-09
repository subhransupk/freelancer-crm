// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: i9JkwxpqHzRfTtai9PKqEh
// Component: RlHhSsmtsudI

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { SimpleChart } from "@plasmicpkgs/react-chartjs-2";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_freelancer_crm.module.css"; // plasmic-import: i9JkwxpqHzRfTtai9PKqEh/projectcss
import sty from "./PlasmicChart.module.css"; // plasmic-import: RlHhSsmtsudI/css

createPlasmicElementProxy;

export type PlasmicChart__VariantMembers = {};
export type PlasmicChart__VariantsArgs = {};
type VariantPropType = keyof PlasmicChart__VariantsArgs;
export const PlasmicChart__VariantProps = new Array<VariantPropType>();

export type PlasmicChart__ArgsType = {
  get12MoRevenue?: any;
};
type ArgPropType = keyof PlasmicChart__ArgsType;
export const PlasmicChart__ArgProps = new Array<ArgPropType>("get12MoRevenue");

export type PlasmicChart__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  chart?: p.Flex<typeof SimpleChart>;
};

export interface DefaultChartProps {
  get12MoRevenue?: any;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicChart__RenderFunc(props: {
  variants: PlasmicChart__VariantsArgs;
  args: PlasmicChart__ArgsType;
  overrides: PlasmicChart__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <h2
          data-plasmic-name={"h2"}
          data-plasmic-override={overrides.h2}
          className={classNames(
            projectcss.all,
            projectcss.h2,
            projectcss.__wab_text,
            sty.h2
          )}
        >
          <React.Fragment>
            <span
              className={"plasmic_default__all plasmic_default__span"}
              style={{ fontWeight: 500 }}
            >
              {"Revenue overview"}
            </span>
          </React.Fragment>
        </h2>
      </div>
      <SimpleChart
        data-plasmic-name={"chart"}
        data-plasmic-override={overrides.chart}
        className={classNames("__wab_instance", sty.chart)}
        data={$props.get12MoRevenue.data}
        fill={false}
        interactive={false}
        labelField={"month"}
        title={``}
        type={"line"}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "h2", "chart"],
  freeBox: ["freeBox", "h2"],
  h2: ["h2"],
  chart: ["chart"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  h2: "h2";
  chart: typeof SimpleChart;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicChart__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicChart__VariantsArgs;
    args?: PlasmicChart__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicChart__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicChart__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicChart__ArgProps,
          internalVariantPropNames: PlasmicChart__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicChart__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChart";
  } else {
    func.displayName = `PlasmicChart.${nodeName}`;
  }
  return func;
}

export const PlasmicChart = Object.assign(
  // Top-level PlasmicChart renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    h2: makeNodeComponent("h2"),
    chart: makeNodeComponent("chart"),

    // Metadata about props expected for PlasmicChart
    internalVariantProps: PlasmicChart__VariantProps,
    internalArgProps: PlasmicChart__ArgProps
  }
);

export default PlasmicChart;
/* prettier-ignore-end */
