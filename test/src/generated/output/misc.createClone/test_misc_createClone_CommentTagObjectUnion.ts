import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_misc_createClone_CommentTagObjectUnion = _test_misc_clone(
  "CommentTagObjectUnion",
)<CommentTagObjectUnion>(CommentTagObjectUnion)(
  (input: CommentTagObjectUnion): typia.Resolved<CommentTagObjectUnion> => {
    const $io0 = (input: any): boolean =>
      "number" === typeof input.value && 3 <= input.value;
    const $io1 = (input: any): boolean =>
      "string" === typeof input.value &&
      3 <= input.value.length &&
      input.value.length <= 7;
    const $throws = (typia.misc.createClone as any).throws;
    const $cp0 = (input: any) =>
      input.map((elem: any) =>
        "object" === typeof elem && null !== elem ? $cu0(elem) : (elem as any),
      );
    const $co0 = (input: any): any => ({
      value: input.value as any,
    });
    const $co1 = (input: any): any => ({
      value: input.value as any,
    });
    const $cu0 = (input: any): any =>
      (() => {
        if (
          "string" === typeof input.value &&
          3 <= input.value.length &&
          input.value.length <= 7
        )
          return $co1(input);
        else if ("number" === typeof input.value && 3 <= input.value)
          return $co0(input);
        else
          $throws({
            expected:
              "(CommentTagObjectUnion.Literal | CommentTagObjectUnion.Numeric)",
            value: input,
          });
      })();
    return Array.isArray(input) ? $cp0(input) : (input as any);
  },
);
