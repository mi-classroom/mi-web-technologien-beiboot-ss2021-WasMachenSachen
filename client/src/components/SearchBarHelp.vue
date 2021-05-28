<template>
  <div class="px-4 my-4">
    <Divider text="Benutzung" />
    <div>
      <p class="text-sm">
        White space acts as an AND operator, while a single pipe ( <code
          class="px-2 py-1 m-0 font-mono text-xs leading-6 text-gray-700 bg-gray-200 rounded-sm "
          >|</code
        >
        ) character acts as an OR operator. To escape white space, use double
        quote ex.
        <code
          class="px-2 py-1 m-0 font-mono text-xs leading-6 text-gray-700 bg-gray-200 rounded-sm "
          >="scheme language"</code
        >
        for exact match.
      </p>
      <table
        class="mx-auto my-4 overflow-x-auto text-sm text-gray-800 border-collapse"
        style="border-spacing: 2px"
      >
        <thead class="border-collapse" style="border-spacing: 2px">
          <tr
            class="border-t border-gray-300 border-solid"
            style="border-spacing: 2px"
          >
            <th
              class="px-4 py-2 font-bold text-center border border-gray-300 border-solid "
              style="border-spacing: 2px"
            >
              Token
            </th>
            <th
              class="px-4 py-2 font-bold text-center border border-gray-300 border-solid "
              style="border-spacing: 2px"
            >
              Match type
            </th>
            <th
              class="px-4 py-2 font-bold text-center border border-gray-300 border-solid "
              style="border-spacing: 2px"
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody class="border-collapse" style="border-spacing: 2px">
          <tr
            class="border-t border-gray-300 border-solid"
            style="border-spacing: 2px"
          >
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              <code
                class="px-2 py-1 m-0 font-mono text-xs text-gray-700 bg-gray-200 rounded-sm "
                style="border-spacing: 2px"
                >jscript</code
              >
            </td>
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              fuzzy-match
            </td>
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              Items that fuzzy match
              <code
                class="px-2 py-1 m-0 font-mono text-xs text-gray-700 bg-gray-200 rounded-sm "
                style="border-spacing: 2px"
                >jscript</code
              >
            </td>
          </tr>
          <tr
            class="bg-gray-100 border-t border-gray-300 border-solid"
            style="border-spacing: 2px"
          >
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              <code
                class="px-2 py-1 m-0 font-mono text-xs text-gray-700 bg-gray-200 rounded-sm "
                style="border-spacing: 2px"
                >=scheme</code
              >
            </td>
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              exact-match
            </td>
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              Items that are
              <code
                class="px-2 py-1 m-0 font-mono text-xs text-gray-700 bg-gray-200 rounded-sm "
                style="border-spacing: 2px"
                >scheme</code
              >
            </td>
          </tr>
          <tr
            class="border-t border-gray-300 border-solid"
            style="border-spacing: 2px"
          >
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              <code
                class="px-2 py-1 m-0 font-mono text-xs text-gray-700 bg-gray-200 rounded-sm "
                style="border-spacing: 2px"
                >'python</code
              >
            </td>
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              include-match
            </td>
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              Items that include
              <code
                class="px-2 py-1 m-0 font-mono text-xs text-gray-700 bg-gray-200 rounded-sm "
                style="border-spacing: 2px"
                >python</code
              >
            </td>
          </tr>
          <tr
            class="bg-gray-100 border-t border-gray-300 border-solid"
            style="border-spacing: 2px"
          >
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              <code
                class="px-2 py-1 m-0 font-mono text-xs text-gray-700 bg-gray-200 rounded-sm "
                style="border-spacing: 2px"
                >!ruby</code
              >
            </td>
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              inverse-exact-match
            </td>
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              Items that do not include
              <code
                class="px-2 py-1 m-0 font-mono text-xs text-gray-700 bg-gray-200 rounded-sm "
                style="border-spacing: 2px"
                >ruby</code
              >
            </td>
          </tr>
          <tr
            class="border-t border-gray-300 border-solid"
            style="border-spacing: 2px"
          >
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              <code
                class="px-2 py-1 m-0 font-mono text-xs text-gray-700 bg-gray-200 rounded-sm "
                style="border-spacing: 2px"
                >^java</code
              >
            </td>
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              prefix-exact-match
            </td>
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              Items that start with
              <code
                class="px-2 py-1 m-0 font-mono text-xs text-gray-700 bg-gray-200 rounded-sm "
                style="border-spacing: 2px"
                >java</code
              >
            </td>
          </tr>
          <tr
            class="bg-gray-100 border-t border-gray-300 border-solid"
            style="border-spacing: 2px"
          >
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              <code
                class="px-2 py-1 m-0 font-mono text-xs text-gray-700 bg-gray-200 rounded-sm "
                style="border-spacing: 2px"
                >!^earlang</code
              >
            </td>
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              inverse-prefix-exact-match
            </td>
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              Items that do not start with
              <code
                class="px-2 py-1 m-0 font-mono text-xs text-gray-700 bg-gray-200 rounded-sm "
                style="border-spacing: 2px"
                >earlang</code
              >
            </td>
          </tr>
          <tr
            class="border-t border-gray-300 border-solid"
            style="border-spacing: 2px"
          >
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              <code
                class="px-2 py-1 m-0 font-mono text-xs text-gray-700 bg-gray-200 rounded-sm "
                style="border-spacing: 2px"
                >.js$</code
              >
            </td>
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              suffix-exact-match
            </td>
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              Items that end with
              <code
                class="px-2 py-1 m-0 font-mono text-xs text-gray-700 bg-gray-200 rounded-sm "
                style="border-spacing: 2px"
                >.js</code
              >
            </td>
          </tr>
          <tr
            class="bg-gray-100 border-t border-gray-300 border-solid"
            style="border-spacing: 2px"
          >
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              <code
                class="px-2 py-1 m-0 font-mono text-xs text-gray-700 bg-gray-200 rounded-sm "
                style="border-spacing: 2px"
                >!.go$</code
              >
            </td>
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              inverse-suffix-exact-match
            </td>
            <td
              class="px-4 py-2 border border-gray-300 border-solid"
              style="border-spacing: 2px"
            >
              Items that do not end with
              <code
                class="px-2 py-1 m-0 font-mono text-xs text-gray-700 bg-gray-200 rounded-sm "
                style="border-spacing: 2px"
                >.go</code
              >
            </td>
          </tr>
        </tbody>
      </table>
      <p>Näheres zum Suchalgorithmus in der <a href="https://fusejs.io/concepts/scoring-theory.html" class="text-blue-500 underline cursor-pointer">fusejs dokumentation</a></p>
    </div>
    <Divider />
  </div>
</template>

<script>
import Divider from "./Divider.vue";

export default {
  components: { Divider },
};
</script>
