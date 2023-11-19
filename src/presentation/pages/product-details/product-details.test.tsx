jest.mock(
  "cart/useCart",
  () => {
    let cart: ProductInCart[] = [];
    function setCart(newCart: ProductInCart[]) {
      cart = newCart;
    }

    function useCart() {
      return [cart, setCart];
    }

    return useCart;
  },
  { virtual: true }
);

jest.mock("tailwindcss/tailwind.css", () => "");
import "@testing-library/jest-dom";
import { act, render, screen, waitFor } from "@testing-library/react";
import ProductDetails from ".";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ProductInCart } from "../../dtos/add-product-to-cart-dto";
import { PRODUCTS } from "../../../constants/products";
import userEvent from "@testing-library/user-event";
import productsController from "../../controller/products-controller";

describe("ProductDetails", () => {
  it("should render the product in product details page", async () => {
    const mockedProduct = PRODUCTS[0];
    const routeMock = `/produto/${mockedProduct.productId}`;

    render(
      <MemoryRouter initialEntries={[routeMock]}>
        <Routes>
          <Route path="/produto/:id" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(mockedProduct.name)).toBeInTheDocument();
      expect(screen.getByText(mockedProduct.description)).toBeInTheDocument();
      expect(screen.getByText("Adicionar ao carrinho")).toBeInTheDocument();
    });
  });

  it("should be able to add a product to cart", async () => {
    const mockedProduct = PRODUCTS[0];
    const routeMock = `/produto/${mockedProduct.productId}`;

    const spy = jest.spyOn(productsController, "setProductToCart");

    await act(async () => {
      render(
        <MemoryRouter initialEntries={[routeMock]}>
          <Routes>
            <Route path="/produto/:id" element={<ProductDetails />} />
          </Routes>
        </MemoryRouter>
      );
    });

    await userEvent.click(screen.getByText("Adicionar ao carrinho"));

    expect(spy).toHaveBeenCalledWith({
      product: mockedProduct,
      cart: [],
      setCart: expect.any(Function),
    });
  });
});
